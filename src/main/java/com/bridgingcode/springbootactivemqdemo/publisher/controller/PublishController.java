package com.bridgingcode.springbootactivemqdemo.publisher.controller;

import com.bridgingcode.springbootactivemqdemo.model.SystemMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;


/**
 *
 * @author AJ Catambay of Bridging Code
 *
 */

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class PublishController {

    @Autowired
    private JmsTemplate jmsTemplate;

    @PostMapping("/publishMessage")
    public ResponseEntity<String> publishMessage(@RequestBody SystemMessage systemMessage) {
        try {
            jmsTemplate.convertAndSend("transactionQueue", systemMessage);

            return new ResponseEntity<>("Sent.", HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
