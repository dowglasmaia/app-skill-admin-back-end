package maia.com.job.skills.repositories;

import maia.com.job.skills.domain.skill.SkillEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SkillRepository extends JpaRepository<SkillEntity, Long> {
}
