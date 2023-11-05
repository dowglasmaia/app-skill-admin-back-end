package maia.com.job.skills.domain.colaborador.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import maia.com.job.skills.domain.skill.dto.SkillResponse;

import java.util.HashSet;
import java.util.Set;

import static com.fasterxml.jackson.annotation.JsonInclude.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@JsonInclude(Include.NON_NULL)
public class ColaboradorResponse {

    private Long id;
    private String name;
    private String email;
    private String matricula;
    private String cargo;
    private String squard;
    private Set<SkillResponse> skills = new HashSet<>();


}
