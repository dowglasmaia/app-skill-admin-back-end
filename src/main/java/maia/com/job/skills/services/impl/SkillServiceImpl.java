package maia.com.job.skills.services.impl;

import lombok.Getter;
import maia.com.job.skills.domain.skill.dto.SkillRequest;
import maia.com.job.skills.domain.skill.dto.SkillRequestUpdate;
import maia.com.job.skills.domain.skill.dto.SkillResponse;
import maia.com.job.skills.repositories.SkillRepository;
import maia.com.job.skills.services.SkillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
    public void create(SkillRequest skill) {
        var entity = from(skill);
        repository.save(entity);
    }

    @Override
    public SkillResponse update(SkillRequestUpdate request) {
        var entity = repository.findById(request.getId()).orElseThrow(
                () -> new NotFoudCustomer("Skill não encontrada"));

        entity.setName(request.getName());
        entity.setDescripton(request.getDescripton());

        var entityUpdated = repository.save(entity);
        return to(entityUpdated);
    }

    @Getter
    class NotFoudCustomer extends RuntimeException {
        HttpStatus status;

        public NotFoudCustomer(String message) {
            super(message);
            this.status = HttpStatus.NOT_FOUND;
        }
    }
}
