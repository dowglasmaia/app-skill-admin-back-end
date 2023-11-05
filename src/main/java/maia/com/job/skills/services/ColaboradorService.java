package maia.com.job.skills.services;

import maia.com.job.skills.domain.colaborador.dto.ColaboradorResponse;

import java.util.Set;

public interface ColaboradorService {

    ColaboradorResponse getById(Long id);

    Set<ColaboradorResponse> getAllBySkill(Long idSkill);
}
