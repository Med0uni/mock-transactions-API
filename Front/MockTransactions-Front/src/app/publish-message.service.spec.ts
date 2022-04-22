import { TestBed } from '@angular/core/testing';

import { PublishMessageService } from './publish-message.service';

describe('PublishMessageService', () => {
  let service: PublishMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublishMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
