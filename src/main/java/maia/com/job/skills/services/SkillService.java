package maia.com.job.skills.services;

import maia.com.job.skills.domain.skill.dto.SkillRequest;
import maia.com.job.skills.domain.skill.dto.SkillResponse;

import java.util.List;

public interface SkillService {

    List<SkillResponse> getAll();

    void create(SkillRequest skill);
}
