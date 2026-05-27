package com.alp.health;

import org.springframework.boot.SpringApplication;

public class TestHealthApplication {

	public static void main(String[] args) {
		SpringApplication.from(HealthApplication::main).with(TestcontainersConfiguration.class).run(args);
	}

}
