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
    public class PostersController : BaseApiController
    {
        private readonly IGenericRepository<Poster> _posterRepo;
        private readonly IMapper _mapper;
        public PostersController(IGenericRepository<Poster> posterRepo,
                                  IMapper mapper)
        {
            _posterRepo = posterRepo;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<Poster>>> GetAll()
        {
            return Ok(await _posterRepo.ListAllAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<IReadOnlyList<Poster>>> GetById(int id)
        {
            return Ok(await _posterRepo.GetByIdAsync(id));
        }

        [HttpPost]
        public async Task<ActionResult> Create(Poster poster)
        {
            _posterRepo.Add(poster);
            return Ok();
        }

        [HttpPost("{id}")]
        public async Task<ActionResult> Update(int id, [FromBody] Poster poster)
        {
            var entity = await _posterRepo.GetByIdAsync(id);
            entity.ImageUrl = poster.ImageUrl;
            _posterRepo.Update(entity);
            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var entity = await _posterRepo.GetByIdAsync(id);
            _posterRepo.Delete(entity);
            return Ok();
        }
    }
}
