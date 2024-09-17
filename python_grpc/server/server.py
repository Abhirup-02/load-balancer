import grpc
import logging
from concurrent import futures

from python_grpc.grpc_types.service_pb2_grpc import add_GreeterServicer_to_server
from python_grpc.server.servicers.greeter import Greet


def serve() -> None:
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    add_GreeterServicer_to_server(Greet(), server)
    port = 50051
    server.add_insecure_port(f"[::]:{port}")
    server.start()
    print("Server started on port 50051")
    server.wait_for_termination()


if __name__ == "__main__":
    logging.basicConfig()
    serve()
