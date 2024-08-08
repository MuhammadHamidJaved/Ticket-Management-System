CREATE TABLE Event_Table (
    event_id INT PRIMARY KEY identity(1,1),
    title VARCHAR(100) NOT NULL,
    event_location VARCHAR(50),
    release_date DATE,
	link varchar(1000)
);
--drop table Event_Table
select * from Event_Table
insert into Event_Table (title,event_location,release_date,link)
values
('Music Fest 2024','Rawalpindi','2024-09-20','https://storage.googleapis.com/bookmepk/static/custom/upload/events/bg/musicfest010324.jpg'),
('Tik Winter Fest 2024','Lahore','2024-08-30','https://storage.googleapis.com/bookmepk/static/custom/upload/events/bg/winterfest090224.png'),
('Pycon 2024','Karachi','2024-06-2','https://storage.googleapis.com/bookmepk/static/custom/upload/events/bg/pycon111223-1.jpg');



insert into Event_Table (title,event_location,release_date,link)
values
--('Music Fest 2024','Rawalpindi','2024-09-20','https://storage.googleapis.com/bookmepk/static/custom/upload/events/bg/musicfest010324.jpg'),
--('Tik Winter Fest 2024','Lahore','2024-08-30','https://storage.googleapis.com/bookmepk/static/custom/upload/events/bg/winterfest090224.png'),
--('Pycon 2024','Karachi','2024-06-2','https://storage.googleapis.com/bookmepk/static/custom/upload/events/bg/pycon111223-1.jpg'),
('Canal City Success Celebration','Lahore','2024-09-12','https://storage.googleapis.com/bookmepk/static/custom/upload/events/bg/atifconcertsa.jpg?1'),

('PIFF Workshop Karachi','Karachi','2024-05-10','https://storage.googleapis.com/bookmepk/static/custom/upload/events/bg/piffkhi.jpg'),

('PIFF Workshop Lahore','Lahore','2024-05-09','https://storage.googleapis.com/bookmepk/static/custom/upload/events/bg/pifflhr.jpg'),

('Velo presents The Comedy Club','Islamabad','2024-05-11','https://storage.googleapis.com/bookmepk/static/custom/upload/events/bg/velo070524-3.jpg'),

('Islamabad Night Race','Islamabad','2024-05-25','https://storage.googleapis.com/bookmepk/static/custom/upload/events/bg/nightrace300424.png'),

('Rawalpindi to Attock Safari Tourist Train','Rawalpindi','2024-06-01','https://storage.googleapis.com/bookmepk/static/custom/upload/events/bg/safaritrain-180424.png')
--update Event_Table
--set title='Pycon 2024',event_location='Karachi'
--where event_id=3
create table EventTickets
(
	ticket_ID int primary key identity(1,1),
	title varchar(50),
	loc varchar(50),
	price int,
	noOfTickets int,
	UserID int
	constraint fk_ET_UID foreign key (UserID) references Users(UserID)
	on update cascade on delete cascade

);
drop table EventTickets
create procedure BookEventTicket
@titl varchar(50),
@loc varchar(50),
@price int,
@tick int,
@Uid int
as begin 
	insert into EventTickets (title,loc,price,noOfTickets,UserId)
	values
	(@titl,@loc,@price,@tick,@Uid);
end

select *from EventTickets