export class BowlingGame
{
    private rolls: number[] = [];

    roll(pins: number): void {
        this.rolls.push(pins);
    }

    score(): number {
        let score = 0;
        for (let i = 0; i < this.rolls.length; i++) {
            score += this.rolls[i];
        }
        return score;
    }
}