package maia.com.job.skills.services;

import maia.com.job.skills.domain.colaborador.dto.ColaboradorResponse;
import maia.com.job.skills.domain.skill.dto.SkillRequestUpdate;

import java.util.List;
import java.util.Set;

public interface ColaboradorService {

    ColaboradorResponse getById(Long id);


    ColaboradorResponse addSkillInColaborador(List<SkillRequestUpdate> skills, Long idColaborador);

    Set<ColaboradorResponse> getAll(String nameSkill);

    ColaboradorResponse getByMatricula(String matricula);
}
