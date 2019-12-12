import { HeaderLink } from './header-link';

describe('HeaderLink', () => {
  it('should create an instance', () => {
    expect(new HeaderLink('http://some.url', 'some-icon')).toBeTruthy();
  });
});
