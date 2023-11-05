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


    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinTable(
            name = "colaborador_skill",
            joinColumns = @JoinColumn(name = "colaborador_id"),
            inverseJoinColumns = @JoinColumn(name = "skill_id"))
    private Set<SkillEntity> skills = new HashSet<>();

}
