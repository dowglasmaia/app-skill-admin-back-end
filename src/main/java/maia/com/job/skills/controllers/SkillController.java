package maia.com.job.skills.controllers;

import maia.com.job.skills.domain.dto.SkillResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/api/v1/skills")
public class SkillController {

    @GetMapping
    public ResponseEntity<List<SkillResponse>>getSkills(){
        var response =List.of( SkillResponse.builder()
                .id(1L)
                .name("Java 17")
                .descripton("Versão 17 ETL")
                .build());
        return ResponseEntity.ok(response);
    }


}
