package maia.com.job.skills.services.mapper;

import maia.com.job.skills.domain.skill.SkillEntity;
import maia.com.job.skills.domain.skill.dto.SkillRequest;
import maia.com.job.skills.domain.skill.dto.SkillResponse;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class SkillMapper {
    private SkillMapper() {
    }

    public static Set<SkillResponse> to(List<SkillEntity> entities) {
        Set<SkillResponse> responseList = new HashSet<>();
        entities.forEach(
                entity ->
                        responseList.add(
                                SkillResponse.builder()
                                        .id(entity.getId())
                                        .name(entity.getName())
                                        .descripton(entity.getDescripton())
                                        .build()
                        )
        );

        return responseList;
    }

    public static Set<SkillEntity> toSkillEntity(Set<SkillResponse> entities) {
        Set<SkillEntity> responseList = new HashSet<>();
        entities.forEach(
                entity ->
                        responseList.add(
                                SkillEntity.builder()
                                        .id(entity.getId())
                                        .name(entity.getName())
                                        .descripton(entity.getDescripton())
                                        .build()
                        )
        );

        return responseList;
    }

    public static SkillResponse to(SkillEntity entity) {
        return SkillResponse.builder()
                .id(entity.getId())
                .name(entity.getName())
                .descripton(entity.getDescripton())
                .build();
    }

    public static SkillEntity from(SkillRequest skill) {
        return SkillEntity.builder()
                .name(skill.getName())
                .descripton(skill.getDescripton())
                .build();
    }


}
