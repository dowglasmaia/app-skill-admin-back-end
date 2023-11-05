package maia.com.job.skills.repositories;

import maia.com.job.skills.domain.colaborador.ColaboradorEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ColaboradorRepository extends JpaRepository<ColaboradorEntity, Long> {
}
