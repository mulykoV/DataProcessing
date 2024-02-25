package fileIO;

import entity.Entity;

public class Main {

	public static void main(String[] args) {
		Entity entity = new Entity("Mock1", 23, 3.2f);
		
		fileIOInterface fio = new FileIO();
		fio.saveToFile(entity);
		System.out.println((Entity)fio.loadFromFile());
	}
}
