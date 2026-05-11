
package com.fitnesspro;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class HomeController {

    @GetMapping("/health")
    public String health() {
        return "Fitness Pro Backend Running";
    }
}
