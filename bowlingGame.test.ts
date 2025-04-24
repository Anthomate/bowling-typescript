import { BowlingGame } from './BowlingGame';

describe('BowlingGame', () => {
    let game: BowlingGame;

    beforeEach(() => {
        game = new BowlingGame();
    });

    it('should return 0 for a gutter game', () => {
        for (let i = 0; i < 20; i++) {
            game.roll(0);
        }
        expect(game.score()).toBe(0);
    });
});