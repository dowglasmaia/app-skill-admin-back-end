package maia.com.job.skills.services;

import maia.com.job.skills.domain.colaborador.dto.ColaboradorResponse;
import maia.com.job.skills.domain.skill.dto.SkillRequestUpdate;
import maia.com.job.skills.domain.skill.dto.SkillResponse;

import java.util.List;
import java.util.Set;

public interface ColaboradorService {

    ColaboradorResponse getById(Long id);


    public ColaboradorResponse addSkillInColaborador(List<SkillRequestUpdate> skills, Long idColaborador);

    Set<ColaboradorResponse> getAll(String nameSkill);
}
