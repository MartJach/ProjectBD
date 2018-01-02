package testing.purposes.only;

import java.sql.Connection;
import java.sql.DriverManager;

public class ConnectionTestDemo {

public static void main(String[] args) {
		
		String jdbcUrl = "jdbc:mysql://localhost:3308/library-project-bd?useSSL=false";
		String user = "admin";
		String password = "admin";
		
		try {
			System.out.println("Connecting to DB: " + jdbcUrl);
			
			Connection connection =
					DriverManager.getConnection(jdbcUrl,user, password);
			
			System.out.println("Connection successful");
			
			connection.close();
						
		} catch (Exception e) {
			e.printStackTrace();
		}

		
	}
	
}
