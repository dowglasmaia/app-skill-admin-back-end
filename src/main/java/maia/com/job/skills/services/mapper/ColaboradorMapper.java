package maia.com.job.skills.services.mapper;

import maia.com.job.skills.domain.colaborador.ColaboradorEntity;
import maia.com.job.skills.domain.colaborador.dto.ColaboradorResponse;
import maia.com.job.skills.domain.skill.SkillEntity;
import maia.com.job.skills.domain.skill.dto.SkillResponse;

import java.util.HashSet;
import java.util.Set;

public class ColaboradorMapper {
    private ColaboradorMapper() {
    }

    public static ColaboradorResponse to(ColaboradorEntity entity) {
        var response = ColaboradorResponse.builder()
                .id(entity.getId())
                .name(entity.getName())
                .cargo(entity.getCargo())
                .email(entity.getEmail())
                .matricula(entity.getMatricula())
                .squard(entity.getSquard())
                .skills(toListSkill(entity.getSkills()))
                .build();


        return response;
    }

    private static Set<SkillResponse> toListSkill(Set<SkillEntity> entities) {
        Set<SkillResponse> list = new HashSet<>();
        entities.forEach(
                skill ->
                        list.add(SkillResponse.builder()
                                .id(skill.getId())
                                .name(skill.getName())
                                .descripton(skill.getDescripton())
                                .build())
        );

        return list;
    }

}
