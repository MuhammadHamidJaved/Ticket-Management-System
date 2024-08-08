CREATE TABLE Tour_Table (
    Tour_id INT PRIMARY KEY identity(1,1),
    title VARCHAR(100) NOT NULL,
	tour_type varchar(50),
	link varchar(1000)
);
--drop table Tour_Table
select * from Tour_Table
insert into Tour_Table (title,tour_type,link)
values
('Swat','Uphills','https://w0.peakpx.com/wallpaper/975/73/HD-wallpaper-swat-pakistan-azadi-independence-landscape-mountain-pak-river-sky-valley.jpg'),
('Skardu','Uphills','https://backpackinghippie.com/wp-content/uploads/2023/04/IMG_3261-2.jpg'),
('Hunza','Uphills','https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/d5/1c/94/passu-valley-hunza-valley.jpg?w=1200&h=1200&s=1')


insert into Tour_Table (title,tour_type,link)
values
--('Swat','Uphills','https://w0.peakpx.com/wallpaper/975/73/HD-wallpaper-swat-pakistan-azadi-independence-landscape-mountain-pak-river-sky-valley.jpg'),
--('Skardu','Uphills','https://backpackinghippie.com/wp-content/uploads/2023/04/IMG_3261-2.jpg'),
--('Hunza','Uphills','https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/d5/1c/94/passu-valley-hunza-valley.jpg?w=1200&h=1200&s=1'),
('Kashmir','Uphills','https://upload.wikimedia.org/wikipedia/commons/7/70/Neeulm_Valley_AJK_%28Arang_Kel%29.jpg'),
('Naran','Uphills','https://historypak.com/wp-content/uploads/2014/03/Narran-Valley.jpg'),
('kaghan','Uphills','https://upload.wikimedia.org/wikipedia/commons/d/db/Beautiful_Kaghan_Valley_Pakistan.jpg'),
('Gilgit','Uphills','https://t4.ftcdn.net/jpg/02/38/02/89/360_F_238028912_GmMPw564hB1uwdL3GgVlOE0mRmP06G6D.jpg'),
('murree','Uphills','https://www.shutterstock.com/image-photo/nature-murree-ayubia-pakistan-green-260nw-714406459.jpg')

--update Event_Table
--set title='Pycon 2024',event_location='Karachi'
--where event_id=3
create table TourTickets
(
	ticket_ID int primary key identity(1,1),
	title varchar(50),
	tourtype varchar(50),
	price int,
	noOfTickets int,
	UserID int
	constraint fk_TOT_UID foreign key (UserID) references Users(UserID)
	on update cascade on delete cascade

);


drop table TourTickets
create procedure BookTourTicket
@titl varchar(50),
@type varchar(50),
@price int,
@tick int,
@Uid int
as begin 
	insert into TourTickets (title,tourtype,price,noOfTickets,UserId)
	values
	(@titl,@type,@price,@tick,@Uid);
end

select *from TourTickets