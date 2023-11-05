package maia.com.job.skills.controllers;

import maia.com.job.skills.domain.colaborador.dto.ColaboradorResponse;
import maia.com.job.skills.domain.skill.dto.SkillResponse;
import maia.com.job.skills.services.ColaboradorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping(value = "/api/v1/colaboradores")
public class ColaboradorController {

    @Autowired
    private ColaboradorService colaboradorService;

    @GetMapping("/{id}")
    public ResponseEntity<ColaboradorResponse> getById(@PathVariable Long id) {
        var response = colaboradorService.getById(id);

        return ResponseEntity.ok(response);
    }

    @GetMapping("/skill/{id}")
    public ResponseEntity<Set<ColaboradorResponse>> getAllByIdSkill(@PathVariable Long id) {
        var response = colaboradorService.getAllBySkill(id);

        return ResponseEntity.ok(response);
    }

    @PutMapping("/{id}/skills")
    public ResponseEntity<ColaboradorResponse> addJobSkill(@PathVariable Long id, @RequestBody List<SkillResponse> skills) {
        var response = colaboradorService.addSkillInColaborador(skills, id);

        return ResponseEntity.ok(response);
    }


}
