package maia.com.job.skills.domain.skill;

import lombok.*;
import maia.com.job.skills.domain.colaborador.ColaboradorEntity;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "skill")
public class SkillEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String descripton;


    @ManyToMany(mappedBy = "skills",  fetch = FetchType.LAZY)
    private Set<ColaboradorEntity> colaboradores = new HashSet<>();
}
