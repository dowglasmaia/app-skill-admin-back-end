package maia.com.job.skills.services.impl;

import maia.com.job.skills.domain.colaborador.dto.ColaboradorResponse;
import maia.com.job.skills.exptions.NotFoundExptionCustomer;
import maia.com.job.skills.repositories.ColaboradorRepository;
import maia.com.job.skills.services.ColaboradorService;
import maia.com.job.skills.services.mapper.ColaboradorMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import static maia.com.job.skills.services.mapper.ColaboradorMapper.*;

@Service
public class ColaboradorServiceImpl implements ColaboradorService {

    @Autowired
    private ColaboradorRepository colaboradorRepository;

    @Override
    public ColaboradorResponse getById(Long id) {
        var entity = colaboradorRepository.findById(id)
                .orElseThrow(() -> new NotFoundExptionCustomer("Colaborador não encontrado"));

        var r =   to(entity);

        return r;

    }

    @Override
    public List<ColaboradorResponse> getBySkill(Long idSkill) {
        return null;
    }
}
