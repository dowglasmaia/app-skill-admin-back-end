package maia.com.job.skills.services.mapper;

import maia.com.job.skills.domain.SkillEntity;
import maia.com.job.skills.domain.dto.SkillResponse;

import java.util.ArrayList;
import java.util.List;

public class SkillMapper {
    private SkillMapper() {
    }

    public static List<SkillResponse> to(List<SkillEntity> entities) {
        List<SkillResponse> responseList = new ArrayList<>();
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

    public static SkillEntity from(SkillResponse skill) {
        return SkillEntity.builder()
                .name(skill.getName())
                .descripton(skill.getDescripton())
                .build();
    }
}
