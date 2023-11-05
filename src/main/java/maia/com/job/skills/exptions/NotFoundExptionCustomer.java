package maia.com.job.skills.exptions;

import org.springframework.http.HttpStatus;

public class NotFoundExptionCustomer extends RuntimeException {
    HttpStatus status;

    public NotFoundExptionCustomer(String message) {
        super(message);
        this.status = HttpStatus.NOT_FOUND;
    }

}
