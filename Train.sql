go
use UserAuthenticationDB
go
go
create table TrainTickets(
	TicketId int primary key identity(1,1),
	BuyerName varchar(50),
	BusName varchar(50),
	Contact varchar(50),
	Email varchar(100),
	TicketType varchar(40),
	SrcFrom varchar(40),
	DestTo varchar(40),
	TravelDate Date,
	NoOfPassengers int,
);

select * from Users
create table UsersTrainTicket(
	userID int Not Null,
	TicketId int Not Null,
	primary key(userID,TicketId),
	Constraint FK_UID_T foreign key (userID)
	references Users(UserID)
	on update Cascade on delete Cascade,
	Constraint FK_TT_ID foreign key (TicketId)
	references TrainTickets(TicketId)
	on update Cascade on delete Cascade,

);

create procedure BookTrainTicket

@BuyerName varchar(50),
@Contact varchar(50), 
@Email varchar(100), 
@TrainName varchar(50),
@TicketType varchar(40), 
@SrcFrom varchar(40), 
@DestTo varchar(40), 
@TravelDate Date, 
@TotalSeats int
as
begin

	insert into TrainTickets (BuyerName,BusName,Contact,Email,TicketType,SrcFrom,DestTo,TravelDate,NoOfPassengers)
	values
	(@BuyerName,@TrainName,@Contact,@Email,@TicketType,@SrcFrom,@DestTo,@TravelDate,@TotalSeats)
	
end;

create procedure InsertTrainTicketID
@Tid int,
@Uid int
as
begin
	insert into UsersTrainTicket
	values
	(@Uid,@Tid);
end;

Exec InsertTrainTicketID @Tid=1,@Uid=1;

drop procedure InsertTrainTicketID
drop table UsersTrainTicket
drop table TrainTickets
drop procedure BookTrainTicket

select * from TrainTickets
select * from UsersTrainTicket
