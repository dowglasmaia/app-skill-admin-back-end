package maia.com.job.skills.domain.colaborador;

import lombok.*;
import maia.com.job.skills.domain.skill.SkillEntity;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "colaborador")
public class ColaboradorEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private String matricula;
    private String cargo;
    private String squard;

    @ManyToMany(mappedBy = "colaboradores",  fetch = FetchType.LAZY)
    private Set<SkillEntity> skills = new HashSet<>();

}
