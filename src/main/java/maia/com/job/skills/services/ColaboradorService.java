package maia.com.job.skills.services;

import maia.com.job.skills.domain.colaborador.dto.ColaboradorResponse;
import maia.com.job.skills.domain.skill.dto.SkillResponse;

import java.util.List;
import java.util.Set;

public interface ColaboradorService {

    ColaboradorResponse getById(Long id);

    Set<ColaboradorResponse> getAllBySkill(Long idSkill);

    public ColaboradorResponse addSkillInColaborador(List<SkillResponse> skills, Long idColaborador);
}
