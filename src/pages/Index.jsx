import { useState } from "react";
import { Box, Container, Text, VStack, HStack, Input, Button, Select, FormControl, FormLabel, Heading, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  const [workoutType, setWorkoutType] = useState("");
  const [duration, setDuration] = useState("");
  const [intensity, setIntensity] = useState("");
  const [workouts, setWorkouts] = useState([]);

  const handleTrackWorkout = () => {
    const newWorkout = { workoutType, duration, intensity };
    setWorkouts([...workouts, newWorkout]);
    setWorkoutType("");
    setDuration("");
    setIntensity("");
  };

  return (
    <Container maxW="container.xl" p={4}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.500" color="white" p={4} justifyContent="space-between" alignItems="center">
        <HStack spacing={8}>
          <Link as={RouterLink} to="/" fontSize="xl" fontWeight="bold">Home</Link>
          <Link as={RouterLink} to="/track-workout" fontSize="xl" fontWeight="bold">Track Workout</Link>
          <Link as={RouterLink} to="/profile" fontSize="xl" fontWeight="bold">Profile</Link>
        </HStack>
      </Flex>

      {/* Main Section */}
      <VStack spacing={8} mt={8} textAlign="center">
        <Heading>Welcome to Fitness Tracker</Heading>
        <Text fontSize="lg">Track your workouts, monitor your progress, and achieve your fitness goals with our app.</Text>
      </VStack>

      {/* Track Workout Section */}
      <Box mt={16}>
        <Heading size="lg" mb={4}>Track Workout</Heading>
        <VStack spacing={4} align="stretch">
          <FormControl>
            <FormLabel>Workout Type</FormLabel>
            <Select placeholder="Select workout type" value={workoutType} onChange={(e) => setWorkoutType(e.target.value)}>
              <option value="cardio">Cardio</option>
              <option value="strength">Strength</option>
              <option value="flexibility">Flexibility</option>
              <option value="balance">Balance</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Duration (minutes)</FormLabel>
            <Input type="number" placeholder="Enter duration" value={duration} onChange={(e) => setDuration(e.target.value)} />
          </FormControl>
          <FormControl>
            <FormLabel>Intensity</FormLabel>
            <Select placeholder="Select intensity" value={intensity} onChange={(e) => setIntensity(e.target.value)}>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </Select>
          </FormControl>
          <Button colorScheme="blue" onClick={handleTrackWorkout}>Track Workout</Button>
        </VStack>

        {/* Logged Workouts List */}
        <Box mt={8}>
          <Heading size="md" mb={4}>Logged Workouts</Heading>
          <VStack spacing={4} align="stretch">
            {workouts.map((workout, index) => (
              <Box key={index} p={4} borderWidth="1px" borderRadius="md">
                <Text><strong>Type:</strong> {workout.workoutType}</Text>
                <Text><strong>Duration:</strong> {workout.duration} minutes</Text>
                <Text><strong>Intensity:</strong> {workout.intensity}</Text>
              </Box>
            ))}
          </VStack>
        </Box>
      </Box>

      {/* Profile Section */}
      <Box mt={16}>
        <Heading size="lg" mb={4}>Profile</Heading>
        <VStack spacing={4} align="stretch">
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input type="text" placeholder="Enter your name" />
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Enter your email" />
          </FormControl>
          <FormControl>
            <FormLabel>Fitness Goals</FormLabel>
            <Input type="text" placeholder="Enter your fitness goals" />
          </FormControl>
          <Button colorScheme="blue">Update Profile</Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;