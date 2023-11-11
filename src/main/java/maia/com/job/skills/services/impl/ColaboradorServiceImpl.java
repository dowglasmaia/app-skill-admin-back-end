package maia.com.job.skills.services.impl;

import maia.com.job.skills.domain.colaborador.dto.ColaboradorResponse;
import maia.com.job.skills.domain.skill.dto.SkillRequestUpdate;
import maia.com.job.skills.domain.skill.dto.SkillResponse;
import maia.com.job.skills.exptions.NotFoundExptionCustomer;
import maia.com.job.skills.repositories.ColaboradorRepository;
import maia.com.job.skills.services.ColaboradorService;
import maia.com.job.skills.services.mapper.SkillMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Objects;
import java.util.Set;

import static java.util.Objects.isNull;
import static maia.com.job.skills.services.mapper.ColaboradorMapper.to;
import static maia.com.job.skills.services.mapper.ColaboradorMapper.toList;

@Service
public class ColaboradorServiceImpl implements ColaboradorService {

    @Autowired
    private ColaboradorRepository repository;

    @Override
    public ColaboradorResponse getById(Long id) {
        var entity = repository.findById(id)
                .orElseThrow(() -> new NotFoundExptionCustomer("Colaborador não encontrado"));

        return to(entity);

    }



    @Override
    public Set<ColaboradorResponse> getAll(String nameSkill) {
        if(Objects.nonNull(nameSkill) && !nameSkill.isEmpty() ){
           return   toList(repository.findBySkills_NameContainingIgnoreCase(nameSkill));
        }
        return toList(repository.findAll());
    }

    @Override
    public ColaboradorResponse addSkillInColaborador(List<SkillRequestUpdate> skills, Long idColaborador) {

        var colaboradorEntity = repository.findById(idColaborador).get();

        var listSkill = SkillMapper.toSkillEntity(new HashSet<>(skills));

        colaboradorEntity.setSkills(listSkill);

        var colaboradorUpdated = repository.save(colaboradorEntity);

        return to(colaboradorUpdated);
    }

}
