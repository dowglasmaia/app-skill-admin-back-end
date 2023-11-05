package maia.com.job.skills.services;

import maia.com.job.skills.domain.colaborador.dto.ColaboradorResponse;

import java.util.ArrayList;
import java.util.List;

public interface ColaboradorService {

    ColaboradorResponse getById(Long id);

    List<ColaboradorResponse> getBySkill(Long idSkill);
}
