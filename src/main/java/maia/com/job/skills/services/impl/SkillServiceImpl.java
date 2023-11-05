package maia.com.job.skills.services.impl;

import maia.com.job.skills.domain.dto.SkillResponse;
import maia.com.job.skills.repositories.SkillRepository;
import maia.com.job.skills.services.SkillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import static maia.com.job.skills.services.mapper.SkillMapper.from;
import static maia.com.job.skills.services.mapper.SkillMapper.to;

@Service
public class SkillServiceImpl implements SkillService {

    @Autowired
    private SkillRepository repository;

    @Override
    public List<SkillResponse> getAll() {
        var skills = repository.findAll();
        return to(skills);
    }

    @Override
    public void create(SkillResponse skill) {
        var entity = from(skill);
        repository.save(entity);
    }
}
