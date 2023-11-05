package maia.com.job.skills.services.mapper;

import maia.com.job.skills.domain.skill.SkillEntity;
import maia.com.job.skills.domain.skill.dto.SkillRequest;
import maia.com.job.skills.domain.skill.dto.SkillResponse;

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

    public static SkillResponse to( SkillEntity entity) {
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
