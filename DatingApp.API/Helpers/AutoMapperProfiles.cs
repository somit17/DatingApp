using System.Linq;
using AutoMapper;
using DatingApp.API.Dtos;
using DatingApp.API.Models;

namespace DatingApp.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User, UserForListData>().
            ForMember(destinationMember => destinationMember.PhotoURL,
            memberOptions => memberOptions.MapFrom(sourceMember => sourceMember.Photos.FirstOrDefault(p => p.IsMain).URL)).
            ForMember(destinationMember => destinationMember.Age,
            memberOptions => memberOptions.MapFrom(sourceMember => sourceMember.DateOfBirth.CalculateAge()));
            CreateMap<User, UserForDetailsDto>().
            ForMember(destinationMember => destinationMember.PhotoURL,
            memberOptions => memberOptions.MapFrom(sourceMember => sourceMember.Photos.FirstOrDefault(p => p.IsMain).URL)).
            ForMember(destinationMember => destinationMember.Age,
            memberOptions => memberOptions.MapFrom(sourceMember => sourceMember.DateOfBirth.CalculateAge()));
            CreateMap<Photo, PhotosForDetailsDto>();
        }
    }
}