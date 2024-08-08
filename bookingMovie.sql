go
use UserAuthenticationDB
go
go
create table MovieTickets(
	TicketId int primary key identity(1,1),
	Title varchar(100),
	Genre varchar(50),
	Price int,
	seatType varchar(50),
	seats int,
	userID int,
	Constraint Fk_MT_UID foreign key
	(userID) references Users(UserID)
	on update Cascade on delete Cascade
);

drop table MovieTickets
select * from Users


create procedure BookMovieTicket
@titl varchar(100),
@genre varchar(50),
@price int,
@seatType varchar(50),
@seats int,
@Uid int
as 
begin
	insert into MovieTickets (Title,Genre,Price,seatType,Seats,userID) values
	(@titl,@genre,@price,@seatType,@seats,@Uid)
end;
exec BookMovieTicket @titl = 'hi', @genre='bye', @price=20,@seatType='Gold',@seats=2,@Uid=1;
select * from MovieTickets

drop table MovieTickets
drop procedure BookMovieTicket