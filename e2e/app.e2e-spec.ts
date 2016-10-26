import { TicTacAng2Page } from './app.po';

describe('tic-tac-ang2 App', function() {
  let page: TicTacAng2Page;

  beforeEach(() => {
    page = new TicTacAng2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
