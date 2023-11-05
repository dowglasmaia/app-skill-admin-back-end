package maia.com.job.skills.services;

import maia.com.job.skills.domain.dto.SkillResponse;

import java.util.List;

public interface SkillService {

    List<SkillResponse> getAll();

    void create(SkillResponse skill);
}
