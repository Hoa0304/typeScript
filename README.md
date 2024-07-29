# Typescript 

## Destructuring 

```
- Rút gọn và làm cho code trở nên dễ đọc hơn.
- Trích xuất các giá trị cần thiết từ mảng hoặc đối tượng một cách nhanh chóng.
- Đặt tên cho các biến mới khác với tên thuộc tính trong đối tượng.
- Đặt giá trị mặc định cho các biến khi giá trị trong mảng hoặc đối tượng không tồn tại.
- Sử dụng trong các tham số của hàm để nhận các giá trị từ một đối tượng.
```

- Object destructuring.

- Array destructuring.

[Thực hành nèo ](ts/destructuring.ts) .

## Type Alias & Interface

- Type Alias:  ( định nghĩa bất kỳ kiểu dữ liệu nào ).
> Sử dụng từ khóa type và dấu = để định nghĩa kiểu dữ liệu.
> Có thể sử dụng union (|) hoặc intersection (&: Khi muốn gom 2 cái interface hay 2 cái object type or 1 object type 1 interface) để mở rộng type. 

- Interface: Đặt tên cho 1 Object Type.

> Sử dụng từ khóa extends để mở rộng interface.

```

- Có thể mở rộng : declaration merging - có thể định nghĩa lại và hệ thống sẽ tự merge vào nhau.
- Đặt tên : ComponentProps.

```

>> & = extends. 

[Thực hành nèo ](ts/OOP/interface.ts) .

### Nên dùng Type Alias hay Interface?

- Luôn dùng ```interface``` đến khi nào kh dùng dc nữa thì qua type alias.


<br>

## Generics