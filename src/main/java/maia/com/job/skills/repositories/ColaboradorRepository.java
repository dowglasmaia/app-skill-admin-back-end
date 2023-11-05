package maia.com.job.skills.repositories;

import maia.com.job.skills.domain.colaborador.ColaboradorEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ColaboradorRepository extends JpaRepository<ColaboradorEntity, Long> {

    List<ColaboradorEntity> findBySkills_Id(Long idSkill);
}
