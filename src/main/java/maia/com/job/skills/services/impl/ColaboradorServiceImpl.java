package maia.com.job.skills.services.impl;

import maia.com.job.skills.domain.colaborador.dto.ColaboradorResponse;
import maia.com.job.skills.exptions.NotFoundExptionCustomer;
import maia.com.job.skills.repositories.ColaboradorRepository;
import maia.com.job.skills.services.ColaboradorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
    public Set<ColaboradorResponse> getAllBySkill(Long idSkill) {
        if (isNull(idSkill) || idSkill == 0) {
            return this.getAll();
        }

        return this.getAll(idSkill);
    }

    private Set<ColaboradorResponse> getAll(Long idSkill) {
        var listEntiry = repository.findBySkills_Id(idSkill);
        return toList(listEntiry);
    }

    private Set<ColaboradorResponse> getAll() {
        var listEntiry = repository.findAll();
        return toList(listEntiry);
    }

}
