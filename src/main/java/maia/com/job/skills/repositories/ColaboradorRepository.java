package maia.com.job.skills.repositories;

import maia.com.job.skills.domain.colaborador.ColaboradorEntity;
import maia.com.job.skills.domain.colaborador.dto.ColaboradorResponse;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ColaboradorRepository extends JpaRepository<ColaboradorEntity, Long> {

    List<ColaboradorEntity> findBySkills_NameContainingIgnoreCase(String nameSkill);

    ColaboradorEntity findByMatricula(String matricula);
}
