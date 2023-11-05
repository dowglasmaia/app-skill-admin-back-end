package maia.com.job.skills.domain.skill.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SkillRequestUpdate {

    private Long id;
    private String name;
    private String descripton;
}
