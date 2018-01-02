package testing.purposes.only;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import bd.project.entity.BibUnit;
import bd.project.entity.Citation;
import bd.project.entity.Institution;
import bd.project.entity.Journal;
import bd.project.entity.Person;
import bd.project.entity.Publisher;
import bd.project.entity.Responsibility;


public class AddBibUnitDemo {

public static void main(String[] args) {
		
		SessionFactory factory = new Configuration()
										.configure("hibernate.cfg.xml")
										.addAnnotatedClass(BibUnit.class)
										.addAnnotatedClass(Citation.class)
										.addAnnotatedClass(Institution.class)
										.addAnnotatedClass(Journal.class)
										.addAnnotatedClass(Person.class)
										.addAnnotatedClass(Publisher.class)
										.addAnnotatedClass(Responsibility.class)
										.buildSessionFactory();
		
		Session session = factory.getCurrentSession();
		
		try {	
			System.out.println("Starting transaction");			
			session.beginTransaction();
			// starting transaction
						
			BibUnit bibUnit = new BibUnit("type one", "SOME-ISBN-RANDOM-NUMBERS-5864", "NO-FUCKING-IDEA-WTF-IS-DOI", "SOME NICE TITLE, FLOWERS ETC", 0, 0, 2018, 666, 0);
			System.out.println("Creating bibUnit: " +  bibUnit);
			
			session.save(bibUnit);	
			System.out.println("Saving unit");			
			
			
			// commiting transaction
			session.getTransaction().commit();
			System.out.println("Done.");
			
		} finally {
			session.close();
			factory.close();
		}

	}
	
}
