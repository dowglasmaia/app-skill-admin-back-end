package maia.com.job.skills.controllers;

import maia.com.job.skills.domain.colaborador.dto.ColaboradorResponse;
import maia.com.job.skills.services.ColaboradorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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


}
