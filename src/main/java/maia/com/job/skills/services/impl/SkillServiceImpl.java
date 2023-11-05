package maia.com.job.skills.services.impl;

import maia.com.job.skills.domain.skill.dto.SkillRequest;
import maia.com.job.skills.domain.skill.dto.SkillRequestUpdate;
import maia.com.job.skills.domain.skill.dto.SkillResponse;
import maia.com.job.skills.exptions.NotFoundExptionCustomer;
import maia.com.job.skills.repositories.SkillRepository;
import maia.com.job.skills.services.SkillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

import static maia.com.job.skills.services.mapper.SkillMapper.from;
import static maia.com.job.skills.services.mapper.SkillMapper.to;

@Service
public class SkillServiceImpl implements SkillService {

    @Autowired
    private SkillRepository repository;

    @Override
    public Set<SkillResponse> getAll() {
        var skills = repository.findAll();
        return to(skills);
    }

    @Override
    public void create(SkillRequest skill) {
        var entity = from(skill);
        repository.save(entity);
    }

    @Override
    public SkillResponse update(SkillRequestUpdate request) {
        var entity = repository.findById(request.getId()).orElseThrow(
                () -> new NotFoundExptionCustomer("Skill não encontrada"));

        entity.setName(request.getName());
        entity.setDescripton(request.getDescripton());

        var entityUpdated = repository.save(entity);
        return to(entityUpdated);
    }


}
