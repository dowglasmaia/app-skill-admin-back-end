package maia.com.job.skills.services.mapper;

import maia.com.job.skills.domain.colaborador.ColaboradorEntity;
import maia.com.job.skills.domain.colaborador.dto.ColaboradorResponse;
import maia.com.job.skills.domain.skill.SkillEntity;
import maia.com.job.skills.domain.skill.dto.SkillResponse;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class ColaboradorMapper {
    private ColaboradorMapper() {
    }

    public static ColaboradorResponse to(ColaboradorEntity entity) {
        return ColaboradorResponse.builder()
                .id(entity.getId())
                .name(entity.getName())
                .cargo(entity.getCargo())
                .email(entity.getEmail())
                .matricula(entity.getMatricula())
                .squard(entity.getSquard())
                .skills(toListSkill(entity.getSkills()))
                .build();
    }

    public static Set<ColaboradorResponse> toList(List<ColaboradorEntity> entities) {
        Set<ColaboradorResponse> colaboradores = new HashSet<>();
        entities.forEach(
                entity ->
                        colaboradores.add(ColaboradorResponse.builder()
                                .id(entity.getId())
                                .name(entity.getName())
                                .cargo(entity.getCargo())
                                .email(entity.getEmail())
                                .matricula(entity.getMatricula())
                                .squard(entity.getSquard())
                                .skills(toListSkill(entity.getSkills()))
                                .build()
                        )
        );

        return colaboradores;
    }

    private static Set<SkillResponse> toListSkill(Set<SkillEntity> entities) {
        Set<SkillResponse> skills = new HashSet<>();
        entities.forEach(
                skill ->
                        skills.add(SkillResponse.builder()
                                .id(skill.getId())
                                .name(skill.getName())
                                .descripton(skill.getDescripton())
                                .build())
        );
        return skills;
    }

}
