const rockPaperScissors = {
  arrayOfHands: ['Rock', 'Paper', 'Scissors'],
  symbols: {
    Rock: '<i class="fa fa-hand-rock-o" aria-hidden="true" style="font-size: 100px;"></i>',
    Paper: '<i class="fa fa-hand-paper-o" aria-hidden="true" style="font-size: 100px;"></i>',
    Scissors: '<i class="fa fa-hand-scissors-o" aria-hidden="true" style="font-size: 100px;"></i>',
  },
  userPoints: 0,
  opponentPoints: 0,
  showPoints() {
    $('#userPoints').html(this.userPoints);
    $('#opponentPoints').html(this.opponentPoints);
  },
  showHands() {
    $('#userHand').html(this.symbols.Rock);
    $('#opponentHand').html(this.symbols.Rock);
  },
  getUserInput() {
    $('#results').html('');
    const userHand = event.target.id;
    $('#userHand').html(this.symbols.Rock);
    $('#opponentHand').html(this.symbols.Rock);
    for (let i = 0; i < 3; i += 1) {
      $('#userHand i').animate({
        fontSize: '80px',
      }, 250);
      $('#userHand i').animate({
        fontSize: '100px',
      }, 250);
    }
    for (let i = 0; i < 3; i += 1) {
      $('#opponentHand i').animate({
        fontSize: '80px',
      }, 250);
      $('#opponentHand i').animate({
        fontSize: '100px',
      }, 250);
    }
    setTimeout(() => {
      this.decideWhoWon(userHand);
    }, 1500);
  },
  decideWhoWon(user) {
    const szam = Math.floor(Math.random() * 3);
    const opponentHand = this.arrayOfHands[szam];
    if (user === 'Rock') {
      if (opponentHand === 'Rock') {
        $('#userHand').html(this.symbols[user]);
        $('#opponentHand').html(this.symbols[opponentHand]);
        $('#results').html('Draw!');
        $('#results').removeClass('text-success');
        $('#results').removeClass('text-danger');
        $('#results').addClass('text-dark');
        this.showPoints();
      } else if (opponentHand === 'Paper') {
        $('#userHand').html(this.symbols[user]);
        $('#opponentHand').html(this.symbols[opponentHand]);
        $('#results').html('You lost!');
        $('#results').removeClass('text-success');
        $('#results').addClass('text-danger');
        $('#results').removeClass('text-dark');
        this.opponentPoints += 1;
        this.showPoints();
      } else if (opponentHand === 'Scissors') {
        $('#userHand').html(this.symbols[user]);
        $('#opponentHand').html(this.symbols[opponentHand]);
        $('#results').html('You won!');
        $('#results').addClass('text-success');
        $('#results').removeClass('text-danger');
        $('#results').removeClass('text-dark');
        this.userPoints += 1;
        this.showPoints();
      }
    }
    if (user === 'Paper') {
      if (opponentHand === 'Rock') {
        $('#userHand').html(this.symbols[user]);
        $('#opponentHand').html(this.symbols[opponentHand]);
        $('#results').html('You won!');
        $('#results').addClass('text-success');
        $('#results').removeClass('text-danger');
        $('#results').removeClass('text-dark');
        this.userPoints += 1;
        this.showPoints();
      } else if (opponentHand === 'Paper') {
        $('#userHand').html(this.symbols[user]);
        $('#opponentHand').html(this.symbols[opponentHand]);
        $('#results').html('Draw!');
        $('#results').removeClass('text-success');
        $('#results').removeClass('text-danger');
        $('#results').addClass('text-dark');
        this.showPoints();
      } else if (opponentHand === 'Scissors') {
        $('#userHand').html(this.symbols[user]);
        $('#opponentHand').html(this.symbols[opponentHand]);
        $('#results').html('You lost!');
        $('#results').removeClass('text-success');
        $('#results').addClass('text-danger');
        $('#results').removeClass('text-dark');
        this.opponentPoints += 1;
        this.showPoints();
      }
    }
    if (user === 'Scissors') {
      if (opponentHand === 'Rock') {
        $('#userHand').html(this.symbols[user]);
        $('#opponentHand').html(this.symbols[opponentHand]);
        $('#results').html('You lost!');
        $('#results').removeClass('text-success');
        $('#results').addClass('text-danger');
        $('#results').removeClass('text-dark');
        this.opponentPoints += 1;
        this.showPoints();
      } else if (opponentHand === 'Paper') {
        $('#userHand').html(this.symbols[user]);
        $('#opponentHand').html(this.symbols[opponentHand]);
        $('#results').html('You won!');
        $('#results').addClass('text-success');
        $('#results').removeClass('text-danger');
        $('#results').removeClass('text-dark');
        this.userPoints += 1;
        this.showPoints();
      } else if (opponentHand === 'Scissors') {
        $('#userHand').html(this.symbols[user]);
        $('#opponentHand').html(this.symbols[opponentHand]);
        $('#results').html('Draw!');
        $('#results').removeClass('text-success');
        $('#results').removeClass('text-danger');
        $('#results').addClass('text-dark');
        this.showPoints();
      }
    }
  },
};

rockPaperScissors.showPoints();
rockPaperScissors.showHands();
