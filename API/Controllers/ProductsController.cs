using System.Collections.Generic;
using System.Threading.Tasks;
using API.Dtos;
using API.Errors;
using API.Helpers;
using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Core.Specifications;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : BaseApiController
    {
        private readonly IGenericRepository<ProductType> _productTypeRepo;
        private readonly IMapper _mapper;
        private readonly IGenericRepository<Product> _productGenericRepo;
        private readonly IGenericRepository<ProductBrand> _productBrandRepo;
        private readonly IProductRepository _productRepo;
        public ProductsController(IGenericRepository<Product> productRepo,
                                  IGenericRepository<ProductBrand> productBrandRepo,
                                  IGenericRepository<ProductType> productTypeRepo,
                                  IProductRepository repo,
                                  IMapper mapper)
        {
            _productGenericRepo = productRepo;
            _productBrandRepo = productBrandRepo;
            _productTypeRepo = productTypeRepo;
            _productRepo = repo;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<Pagination<ProductToReturnDto>>> GetProducts(
            [FromQuery] ProductSpecParams specParams)
        {
            var spec = new ProductsWithTypesAndBrandsSpecification(specParams);
            var countSpec = new ProductWithFiltersForCountSpecification(specParams);
            var totalItems = await _productGenericRepo.CountAsync(countSpec);
            var products = await _productGenericRepo.ListAsync(spec);
            var data = _mapper.Map<IReadOnlyList<Product>, IReadOnlyList<ProductToReturnDto>>(products);
            return Ok(new Pagination<ProductToReturnDto>(specParams.PageIndex, specParams.PageSize, totalItems, data));
        }

        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status404NotFound)]
        public async Task<ActionResult<ProductToReturnDto>> GetProduct(int id)
        {
            var spec = new ProductsWithTypesAndBrandsSpecification(id);
            var product = await _productGenericRepo.GetEntityWithSpec(spec);

            if (product == null)
            {
                return NotFound(new ApiResponse(404));
            }

            return _mapper.Map<Product, ProductToReturnDto>(product);
        }

        [HttpPost("types")]
        public async Task<ActionResult> CreateProductType(ProductTypeDto typeDto)
        {
            _productTypeRepo.Add(_mapper.Map<ProductTypeDto, ProductType>(typeDto));
            return Ok();
        }

        [HttpGet("manager")]
        public async Task<ActionResult<IReadOnlyList<Product>>> GetAll()
        {
            return Ok(await _productRepo.GetProductsAsync());
        }

        [HttpGet("manager/{id}")]
        public async Task<ActionResult<IReadOnlyList<Product>>> GetById(int id)
        {
            return Ok(await _productRepo.GetProductByIdAsync(id));
        }

        [HttpPost("manager")]
        public async Task<ActionResult> Create(Product item)
        {
            item.ProductBrandId = 1;
            _productGenericRepo.Add(item);
            return Ok();
        }

        [HttpPost("manager/{id}")]
        public async Task<ActionResult> Update(int id, [FromBody] Product item)
        {
            var entity = await _productGenericRepo.GetByIdAsync(id);
            entity.Name = item.Name;
            entity.Price = item.Price;
            entity.ProductTypeId = item.ProductTypeId;
            entity.Description = item.Description;
            entity.Rating = item.Rating;
            entity.PictureUrl = item.PictureUrl;
            entity.AvailableQuantity = item.AvailableQuantity;

            _productGenericRepo.Update(entity);
            return Ok();
        }

        [HttpDelete("manager/{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var entity = await _productGenericRepo.GetByIdAsync(id);
            _productGenericRepo.Delete(entity);
            return Ok();
        }
    }
}