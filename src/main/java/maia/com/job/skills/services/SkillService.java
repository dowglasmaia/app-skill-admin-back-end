package maia.com.job.skills.services;

import maia.com.job.skills.domain.skill.dto.SkillRequest;
import maia.com.job.skills.domain.skill.dto.SkillRequestUpdate;
import maia.com.job.skills.domain.skill.dto.SkillResponse;

import java.util.List;
import java.util.Set;

public interface SkillService {

    Set<SkillResponse> getAll();

    void create(SkillRequest skill);

    SkillResponse update(SkillRequestUpdate request);

    SkillResponse getById(Long id);
}
