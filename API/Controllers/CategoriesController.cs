using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CategoriesController : BaseApiController
    {
        private readonly IGenericRepository<ProductType> _repo;
        private readonly IMapper _mapper;
        public CategoriesController(IGenericRepository<ProductType> repo,
                                  IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<ProductType>>> GetAll()
        {
            return Ok(await _repo.ListAllAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<IReadOnlyList<ProductType>>> GetById(int id)
        {
            return Ok(await _repo.GetByIdAsync(id));
        }

        [HttpPost]
        public async Task<ActionResult> Create(ProductType item)
        {
            _repo.Add(item);
            return Ok();
        }

        [HttpPost("{id}")]
        public async Task<ActionResult> Update(int id, [FromBody] ProductType item)
        {
            var entity = await _repo.GetByIdAsync(id);
            entity.Name = item.Name;
            _repo.Update(entity);
            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var entity = await _repo.GetByIdAsync(id);
            _repo.Delete(entity);
            return Ok();
        }
    }
}
